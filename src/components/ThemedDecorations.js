import React from 'react';

class ThemedDecoration extends React.Component{
	render(){
		const childrenWithNewProp = React.Children.map(this.props.children, child => {
			return React.cloneElement(child, {className: this.props.theme})
		})
		return(
			<div>
				{childrenWithNewProp}
			</div>
		)
	}
}


export default ThemedDecoration;