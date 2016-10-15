class Dog < ActiveSupport::Logger
  
  def self.poop(message)
    Rails.logger.info(message.white.on_red)
  end
  
end