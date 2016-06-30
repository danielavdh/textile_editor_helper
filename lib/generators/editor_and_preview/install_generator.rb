module EditorAndPreview
  module Generators
    class InstallGenerator < Rails::Generators::Base
      source_root File.expand_path('../../../../vendor', __FILE__)
      desc 'Copies files to app'
      def copy_assets
        js_destination = 'app/assets/javascripts'
        css_destination = 'app/assets/stylesheets'
        layout_destination = 'app/views/layouts'
        initializers_destination = 'config/initializers'
        copy_file 'assets/javascripts/backend.js', "#{js_destination}/backend.js"
        copy_file 'assets/javascripts/textile-editor.js', "#{js_destination}/textile-editor.js"
        copy_file 'assets/javascripts/textile-editor-config.js', "#{js_destination}/textile-editor-config.js"
        copy_file 'assets/stylesheets/backend.css', "#{css_destination}/backend.css"
        copy_file 'assets/stylesheets/backend.scss', "#{css_destination}/backend/backend.scss"
        copy_file 'assets/stylesheets/textile-editor.scss', "#{css_destination}/backend/textile-editor.scss"
        copy_file 'assets/views/backend.html.erb', "#{layout_destination}/backend.html.erb"
        copy_file 'assets/config/backend.rb', "#{initializers_destination}/backend.rb"
        #directory 'assets/images/textile-editor', 'app/assets/images/textile-editor'
        readme 'README' if behavior == :invoke
      end
    end
  end
end
