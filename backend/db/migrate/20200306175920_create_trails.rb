class CreateTrails < ActiveRecord::Migration[6.0]
  def change
    create_table :trails do |t|
      t.string :name
      t.string :summary
      t.string :difficulty
      t.string :location
      t.string :rating
      t.float :distance
      t.float :latitude
      t.float :longitude 

      t.timestamps
    end
  end
end
