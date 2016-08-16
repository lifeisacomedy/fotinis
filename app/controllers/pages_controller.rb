require 'mail'

class PagesController < ApplicationController
  def index
  end

  def menu
  end

  def bar
  end

  def about
  end

  def history
  end

  def contact
  end

  def parse_contact
    name = params[:form][:name]
    email = params[:form][:email]
    phone = params[:form][:phone]
    body = params[:form][:message]

# changed :address => "smtp.1and1.com" to "pop.secureserver.net"

    options = { :address        => "pop.secureserver.net",
                :port           => 25,
                :user_name      => "info@fotinisrestaurant.com",
                :password       => "1Pankrati",
                :authentication => "login" }
   
    ##
    # options = { :address              => "smtp.gmail.com",
    #             :port                 => 587,
    #             :user_name            => "chris@ichabodstudios.com",
    #             :password             => "dziewiecdziesiat214",
    #             :authentication       => "plain",
    #             :enable_starttls_auto => true }

    Mail.defaults do
      delivery_method :smtp, options
    end

    Mail.deliver do
      from "info@fotinisrestaurant.com"
      to "info@fotinisrestaurant.com"
      subject "#{name} Gave Feedback!"
      body "From: #{name}, #{phone} – #{email}\n\n#{body}"
    end

    redirect_to contact_path
  end
end
