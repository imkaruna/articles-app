# frozen_string_literal: true

class ArticlesController < ApplicationController
  layout "articles"

  def index
    @articles = Article.all
    render json: @articles
  end
end
