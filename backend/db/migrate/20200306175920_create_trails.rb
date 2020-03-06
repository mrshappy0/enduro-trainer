class CreateTrails < ActiveRecord::Migration[6.0]
  def change
    create_table :trails do |t|
      t.string :name
      t.string :summary
      t.string :difficulty
      t.string :rating
      t.integer :distance
      t.integer :latitude
      t.integer :longitude 

      t.timestamps
    end
  end
end
