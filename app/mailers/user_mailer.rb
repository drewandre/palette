class UserMailer < ApplicationMailer

  def account_confirmation(user_id, token)
    @user = User.find(user_id)
    @token = token
    mail to: @user.email, subject: "Account Confirmation"
  end

  def password_reset(user_id, token)
    @user = User.find(user_id)
    @token = token
    mail to: @user.email, subject: "Password Reset"
  end
end
