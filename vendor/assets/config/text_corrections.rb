module TextCorrections
  
  def self.images_and_links(item_text)
    text = item_text
    content = textilize(text).gsub(/href="http:\/\//, "target=\"_blank\" href=\"http://")
    #if content.split("<img src=").length > 0
    content = content.gsub(/\<img src=\"(\d+)\"/) do |mstr|
      begin
        doc = Document.find($1)
        #unless doc.size == "large"
        #  "<img src=\"#{doc.uploadedPhoto.url(doc.size)}\" class=\"img_float_#{doc.float}\""
        #else
        #  "<img src=\"#{doc.uploadedPhoto.url(doc.size)}\" class=\"large_image\""
        #end
          "<img src=\"#{doc.uploadedPhoto.url(doc.size)}\""
      rescue ActiveRecord::RecordNotFound
        #the error is now handled in article validations
        #rescue still needed preview part when rendering page with error
      end
    end
    content.html_safe
    #end
  end
  
  def self.get_external_links(text)
    content = textilize(text).gsub(/href="http:\/\//, "target=\"_blank\" href=\"http://")
  end

end
