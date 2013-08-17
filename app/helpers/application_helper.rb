module ApplicationHelper

  def old_price_calculator(price, percent)

       decr_amount = (percent / 100.00) * price

       old_price = price - decr_amount
       return old_price

  end
end
