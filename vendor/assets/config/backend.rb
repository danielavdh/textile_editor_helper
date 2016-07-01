# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
Rails.application.config.assets.precompile += %w( backend.css backend.js )
Rails.application.config.i18n.load_path += Dir[Rails.root.join('config', 'locales_eap', '*.{rb,yml}').to_s]

