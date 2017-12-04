require 'rails_helper'

RSpec.describe User, type: :model do
  subject { create(:user) }
  describe "Associations" do
    it { should have_many(:products) }
    it { should have_many(:user_palettes) }
    it { should have_many(:color_palettes) }
    it { should have_many(:api_settings) }
    it { should have_many(:effect_settings) }
  end

  describe "Validations" do
    it { should have_valid(:email).when("something@example.com", "another@something.com") }
    it { should_not have_valid(:email).when(nil, "", "bad", ".com", "bad@com", "bad.com") }

    it { should have_valid(:first_name).when("Abby", "Jillian") }
    it { should_not have_valid(:first_name).when(nil, "") }

    it { should have_valid(:handle).when("ghostgrrl", "H0ltzm4nn") }
    it { should_not have_valid(:handle).when(nil, "", "xy", "---", "-badhandle", "badhandle_", "bad--handle") }

    it { should have_valid(:last_name).when("Yates", "Holtzmann") }
    it { should_not have_valid(:last_name).when(nil, "") }

    # it { should validate_uniqueness_of(:email) }
    # it { should validate_uniqueness_of(:handle) }
    # it { should validate_uniqueness_of(:universally_unique_id) }

  end

  describe "#confirm!" do
    let(:user) { create(:unconfirmed_user) }

    it "updates the confirmed_at attributes" do
      expect(user.confirm!).to eq(true)
      expect(user.confirmed_at).to be_within(1.minute).of(Time.current)
    end
  end

  describe "#confirmed?" do
    let(:user) { create(:unconfirmed_user) }

    it "returns false if confirmed_at is nil" do
      expect(user.confirmed?).to eq(false)
    end

    it "returns true if confirmed_at is not nil" do
      user.confirm!
      expect(user.confirmed?).to eq(true)
    end
  end

  describe "#full_name" do
    let(:user) { create(:user, first_name: "Mabel", last_name: "Pines") }

    it "returns a string of the user's first and last names" do
      expect(user.full_name).to eq("Mabel Pines")
    end
  end

  describe "#generate_remember_digest" do
    let(:user) { create(:user) }
    before { user.generate_remember_digest }

    it "creates the remember token virtual attribute" do
      expect(user.remember_token).to_not be_nil
    end

    it "updates the remember_digest attribute" do
      expect(user.remember_digest).to_not be_nil
      expect(user.remember_digest.length).to eq(60)
    end
  end

  describe "#generate_reset_digest" do
    let(:user) { create(:user) }
    before { user.generate_reset_digest }

    it "creates the remember token virtual attribute" do
      expect(user.password_reset_token).to_not be_nil
    end

    it "updates the remember_digest attribute" do
      expect(user.password_reset_digest).to_not be_nil
      expect(user.password_reset_digest.length).to eq(60)
    end

    it "updates the password_reset_sent_at attribute" do
      expect(user.password_reset_sent_at).to be_within(1.minute).of(Time.current)
    end
  end

  describe "#password_reset_expired?" do
    let(:on_time_user) { create(:user, password_reset_sent_at: Time.current) }
    let(:tardy_user) { create(:user, password_reset_sent_at: Time.current - 3.hours) }
    it "returns false if password_reset_sent_at is less than two hours ago" do
      expect(on_time_user.password_reset_expired?).to eq(false)
    end

    it "returns true if password_reset_sent_at is more than two hours ago" do
      expect(tardy_user.password_reset_expired?).to eq(true)
    end
  end

  describe "#terminate_remember_digest" do
    let(:user) { create(:user) }
    before { user.terminate_remember_digest }
    it "sets the remember_digest attribute to nil" do
      expect(user.remember_digest).to eq(nil)
    end
  end

  describe "#to_param" do
    let(:user) { create(:user, handle: "Furiosa") }
    it "returns the user handle, rather than the primary key" do
      expect(user.to_param).to eq("Furiosa")
    end
  end

end
