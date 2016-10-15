module TextCorrections
  
  def self.images_and_links(item_text)
    text = item_text
    #content = textilize(text).gsub(/href="http:\/\//, "target=\"_blank\" href=\"http://")
    content = RedCloth.new(text).to_html.gsub(/href="https:\/\//, "target=\"_blank\" href=\"https://").gsub(/href="http:\/\//, "target=\"_blank\" href=\"http://")
    content = content.gsub(/\<img src=\"(\d+)\"/) do |mstr|
      begin
        doc = Document.find($1)
        "<img src=\"#{doc.uploadedPhoto.url(doc.size)}\""
      rescue ActiveRecord::RecordNotFound
        #the error is now handled in article validations
        #rescue still needed preview part when rendering page with error
      end
    end
    #content.html_safe
    content
  end
  
#  def self.get_external_links(text)
#    content = textilize(text).gsub(/href="http:\/\//, "target=\"_blank\" href=\"http://")
#  end
  def self.get_external_links(text)
    content = RedCloth.new(text).to_html.gsub(/href="https:\/\//, "target=\"_blank\" href=\"https://").gsub(/href="http:\/\//, "target=\"_blank\" href=\"http://")
  end

end
