class ApplicationMailer < ActionMailer::Base
  default from: "noreply@#{ENV['EMAIL_DOMAIN']}"
  layout "mailer"
end
