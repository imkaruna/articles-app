# frozen_string_literal: true

class ArticlesController < ApplicationController
  layout "articles"

  def index
    @articles = Article.all
    @component = {:articles => @articles}

  end
end
