module BackendHelper
  
  def frontend_pages
    return  [["Homepage", ""], 
            ["next page", ""],
            ["another page", ""],
            ["etc", ""]]
  end
  
  def image_documents
    return @image_documents || []
  end

end
