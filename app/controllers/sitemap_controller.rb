class SitemapController < ApplicationController
  def sitemap
    render :file => "/public/sitemap.xml"
  end
end
