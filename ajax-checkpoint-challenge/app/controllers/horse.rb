get '/horses' do
  @horses = Horse.all
  erb :"/horses/index"
end

get '/horses/new' do
  @horse = Horse.new

  if request.xhr?
    erb :"/horses/_new_horse", layout: false
  else
    erb :"/horses/new"
  end
end

post '/horses' do
  @horse = Horse.new(params[:horse])

  if request.xhr?
    if @horse.save
      erb:"horses/show", layout: false
    else
      "Horse didn't save"
    end
  else
    if @horse.save
      redirect "/horses/#{@horse.id}"
    else
      erb :"/horses/new"
    end
  end
end

get '/horses/:id' do
  @horse = Horse.find(params[:id])
  erb :"/horses/show"
end
