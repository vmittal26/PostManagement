import React from 'react';

export default(props) => {
    const {input, meta, label,className} = props;
    let classList = "";
    if(className){
        classList = `${className} mdl-textfield mdl-js-textfield`; 
    }else{
        classList = "mdl-textfield mdl-js-textfield mdl-textfield--floating-label";
    }
    return (
        <div>
        <div className ={classList}>
            <input {...input} className ="mdl-textfield__input"/>
            <label className="mdl-textfield__label ">{label}</label>
        </div>
         <div className ="post-form__error">{meta.error && meta.touched &&<span >{meta.error}</span>}</div>
         </div>
    );

}