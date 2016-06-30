# -*- encoding: utf-8 -*-
require File.expand_path('../lib/editor_and_preview/version', __FILE__)

Gem::Specification.new do |gem|
  gem.authors       = ['Daniela van der Heijden']
  gem.email         = ['info@wwwebsites.com']
  gem.description   = %q{Editor and Preview is a gem for Ruby on Rails 4.1.4 > to add a Textile toolbar above textareas.}
  gem.summary       = %q{Editor and Preview}
  gem.homepage      = 'https://github.com/danielavdh/editor_and_preview'

  gem.executables   = Dir["bin/*"].map { |f| File.basename(f) }
  gem.files = `git ls-files`.strip.split("\n")
  gem.test_files    = `git ls-files -- {test,spec,features}/*`.split("\n")
  gem.name          = 'editor_and_preview'
  gem.require_paths = ['lib']
  gem.version       = EditorAndPreview::VERSION

  gem.add_runtime_dependency 'thor'
end
