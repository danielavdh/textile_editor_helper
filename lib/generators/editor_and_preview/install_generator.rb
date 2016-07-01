module EditorAndPreview
  module Generators
    class InstallGenerator < Rails::Generators::Base
      source_root File.expand_path('../../../../vendor', __FILE__)
      desc 'Copies files to app'
      def copy_assets
        js_destination = 'app/assets/javascripts'
        css_destination = 'app/assets/stylesheets'
        views_destination = 'app/views'
        config_destination = 'config'
        ### javascripts ###
        copy_file 'assets/javascripts/backend.js', "#{js_destination}/backend.js"
        copy_file 'assets/javascripts/textile-editor.js', "#{js_destination}/textile-editor.js"
        copy_file 'assets/javascripts/textile-editor-config.js', "#{js_destination}/textile-editor-config.js"
        copy_file 'assets/javascripts/preview.js.erb', "#{views_destination}/admins/preview.js.erb"
        ### stylesheets ###
        copy_file 'assets/stylesheets/backend.css', "#{css_destination}/backend.css"
        copy_file 'assets/stylesheets/backend.scss', "#{css_destination}/backend/backend.scss"
        copy_file 'assets/stylesheets/textile-editor.scss', "#{css_destination}/backend/textile-editor.scss"
        ### views ###
        copy_file 'assets/views/backend.html.erb', "#{views_destination}/layouts/backend.html.erb"
        copy_file 'assets/views/_preview.html.erb', "#{views_destination}/admins/_preview.html.erb"
        copy_file 'assets/views/_editor_and_preview_help.html.erb', "#{views_destination}/admins/_editor_and_preview_help.html.erb"
        ### other ###
        copy_file 'assets/config/backend.rb', "#{config_destination}/initializers/backend.rb"
        copy_file 'assets/config/en.yml', "#{config_destination}/locales_eap/en.yml"
        copy_file 'assets/config/de.yml', "#{config_destination}/locales_eap/de.yml"
        #directory 'assets/images/textile-editor', 'app/assets/images/textile-editor'
        #readme 'README' if behavior == :invoke
      end
    end
  end
end
