import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './Burgeringredient/BurgerIngredient';

const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey}/>
        });

    }).reduce((arr, ele) => { return arr.concat(ele) }, []);

    if (transformedIngredients.length === 0){
        transformedIngredients = <p>Add Items to your burger</p>
    }




    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
        
    )

};
export default burger;