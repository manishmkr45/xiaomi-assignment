import Item1 from '../../images/xiaomi-item-1.jpg'
import Item2 from '../../images/xiaomi-item-2.jpg'
import Item3 from '../../images/xiaomi-item-3.jpg'
import Item4 from '../../images/xiaomi-item-4.jpg'
import Item5 from '../../images/xiaomi-item-5.jpg'
import Item6 from '../../images/xiaomi-item-6.jpg'
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action-types/cart-actions'


const initState = {
    items: [
        {id:1,title:'Redmi Earbuds S', desc: "The Redmi Earbuds S comes with a single & dual earbuds function that allows you to get mono or streo experience.", price:33,img:Item1},
        {id:2,title:'Mi Band 3', desc: "Mi Band 3, Large OLED touch screen , Up to 20 days of battery life.", price:25,img: Item2},
        {id:3,title:'Redmi 8A Dual', desc: "Redmi 8A Desh Ka Dumdaar Smartphone 5000mAh High-capacity Battery 15.8cm(6.22) High Definition Display13MP AI Primary Camera + 2MP.",price:99,img: Item3},
        {id:4,title:' Mi Men’s Sports Shoes 2', desc: "The Uni-Moulding process combines 5 different materials to minimize wear damage. This technology will keep the stitching on the soles intact for long-lasting usage.", price:260,img:Item4},
        {id:5,title:'Induction Cooker', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160,img: Item5},
        {id:6,title:'Mi LED', desc: "Mi LED TV 4A Pro, 80 cm (32). HD-Ready display, cinematic quality sound, multiple ports, leading performance.",price:221,img: Item6}
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 6
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 6
        }
  }
    
  else{
    return state
    }
    
}

export default cartReducer
