Fotinisrestaurant::Application.routes.draw do
  root "pages#index"
  get "pages/home" => "pages#index", as: "home"
  get "pages/menu" => "pages#menu", as: "menu"
  get "pages/bar" => "pages#bar", as: "bar"
  get "pages/about" => "pages#about", as: "about"
  get "pages/history" => "pages#history", as: "history"
  get "pages/contact" => "pages#contact", as: "contact"
  get "/sitemap.xml" => "sitemap#sitemap", as: "sitemap"
  post "pages/contact" => "pages#parse_contact"
end
