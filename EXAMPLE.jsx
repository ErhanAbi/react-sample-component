'use strict';

var React = require('react');

var EXAMPLE = React.createClass({



	/**
	 * Merges nextState with the current state.
	 * This is the primary method you use to trigger UI
	 * updates from event handlers and server request callbacks.
	 * In addition, you can supply an optional callback function
	 * that is executed once setState is completed and
	 * the component is re-rendered.
	 *
	 * Notes: NEVER mutate this.state directly, as calling setState()
	 * afterwards may replace the mutation you made. Treat this.state
	 * as if it were immutable. setState() does not immediately mutate
	 * this.state but creates a pending state transition.
	 * Accessing this.state after calling this method can potentially
	 * return the existing value. There is no guarantee of synchronous
	 * operation of calls to setState and calls may be batched for performance gains.
	 * setState() will always trigger a re-render unless conditional rendering logic
	 * is implemented in shouldComponentUpdate().
	 * If mutable objects are being used and the logic cannot be implemented in
	 * shouldComponentUpdate(), calling setState() only when the new state differs
	 * from the previous state will avoid unnecessary re-renders.
	 */
	setState: function( /*object nextState[, function callback]*/ ) {},



	/**
	 * Like setState() but deletes any pre-existing state keys that are not in nextState.
	 */
	replaceState: function( /*object nextState[, function callback]*/ ) {},



	/**
	 * If your render() method reads from something other than this.props or this.state, 
	 * you'll need to tell React when it needs to re-run render() by calling forceUpdate().
	 * You'll also need to call forceUpdate() if you mutate this.state directly.
	 * Calling forceUpdate() will cause render() to be called on the component 
	 * and its children, but React will still only update the DOM if the markup changes.
	 * Normally you should try to avoid all uses of forceUpdate() and only read from 
	 * this.props and this.state in render(). This makes your application much 
	 * simpler and more efficient.
	 * 
	 */
	forceUpdate: function(/*[function callback]*/) {},



	/**
	 * If this component has been mounted into the DOM, this returns the 
	 * corresponding native browser DOM element. This method is useful 
	 * for reading values out of the DOM, such as form field values and 
	 * performing DOM measurements. When render returns null or false, 
	 * this.getDOMNode() returns null.
	 *
	 * @return DOMNode
	 */
	getDOMNode: function() {},



	/**
	 * isMounted() returns true if the component is rendered into the 
	 * DOM, false otherwise. You can use this method to guard asynchronous 
	 * calls to setState() or forceUpdate().
	 *
	 * @return Boolean
	 */
	isMounted: function() {},



	/**
	 * When you're integrating with an external JavaScript application 
	 * you may want to signal a change to a React component rendered 
	 * with React.render(). Though calling React.render() again on the 
	 * same node is the preferred way to update a root-level component, 
	 * you can also call setProps() to change its properties and trigger 
	 * a re-render. In addition, you can supply an optional callback 
	 * function that is executed once setProps is completed and the 
	 * component is re-rendered.
	 *
	 * Note:
	 * When possible, the declarative approach of calling React.render() 
	 * again is preferred; it tends to make updates easier to reason 
	 * about. (There's no significant performance difference between 
	 * the two approaches.) This method can only be called on a 
	 * root-level component. That is, it's only available on the 
	 * component passed directly to React.render() and none of its 
	 * children. If you're inclined to use setProps() on a child 
	 * component, instead take advantage of reactive updates and pass 
	 * the new prop to the child component when it's created in render().
	 */
	setProps: function(/*object nextProps[, function callback]*/) {},



	/**
	 * Like setProps() but deletes any pre-existing 
	 * props instead of merging the two objects.
	 */
	replaceProps: function( /*object nextProps[, function callback]*/ ){},



	/**
	 * The render() method is required. 
	 * When called, it should examine this.props and this.state 
	 * and return a single child component. This child component 
	 * can be either a virtual representation of a native DOM 
	 * component (such as <div /> or React.DOM.div()) or 
	 * another composite component that you've defined yourself.
	 * You can also return null or false to indicate that you 
	 * don't want anything rendered. Behind the scenes, React 
	 * renders a <noscript> tag to work with our current diffing 
	 * algorithm. When returning null or false, 
	 * this.getDOMNode() will return null. The render() function 
	 * should be pure, meaning that it does not modify component 
	 * state, it returns the same result each time it's invoked, 
	 * and it does not read from or write to the DOM or 
	 * otherwise interact with the browser (e.g., by using 
	 * setTimeout). If you need to interact with the browser, 
	 * perform your work in componentDidMount() or the other 
	 * lifecycle methods instead. Keeping render() pure makes 
	 * server rendering more practical and makes components 
	 * easier to think about.
	 */
	render: function() {}

	/**
	 * Invoked once before the component is mounted. 
	 * The return value will be used as the initial 
	 * value of this.state.
	 * 
	 * @return Object
	 */
	getInitialState: function() {}



	/**
	 * Invoked once and cached when the class is created. 
	 * Values in the mapping will be set on this.props 
	 * if that prop is not specified by the parent 
	 * component (i.e. using an in check). This method 
	 * is invoked before any instances are created and 
	 * thus cannot rely on this.props. In addition, 
	 * be aware that any complex objects returned by 
	 * getDefaultProps() will be shared across 
	 * instances, not copied.
	 * 
	 * @return Object
	 */
	getDefaultProps: function() {},

	/**
	 * The propTypes object allows you to validate 
	 * props being passed to your components. For 
	 * more information about propTypes, see 
	 * Reusable Components (React website).
	 * 
	 * @type Object
	 */
	propTypes: {},


	/**
	 * The mixins array allows you to use mixins 
	 * to share behavior among multiple components. 
	 * For more information about mixins, 
	 * see Reusable Components (React website).
	 * 
	 * @type Array
	 */
	mixins: [],



	/**
	 * The statics object allows you to define static 
	 * methods that can be called on the component class.
	 * 
	 * @example
	 *      var MyComponent = React.createClass({
	 *			statics: {
	 *			    customMethod: function(foo) {
	 *			      return foo === 'bar';
	 *			    }
	 *			},
	 *			render: function() {}
	 *		});
	 *		MyComponent.customMethod('bar');  // true
 	 *
 	 * Methods defined within this block are static, 
 	 * meaning that you can run them before any 
 	 * component instances are created, and the 
 	 * methods do not have access to the props or 
 	 * state of your components. If you want to 
 	 * check the value of props in a static method, 
 	 * have the caller pass in the props as an 
 	 * argument to the static method.
 	 * 
	 * @type Object
	 */
	statics: {},



	/**
	 * The displayName string is used in debugging messages. 
	 * JSX sets this value automatically; see JSX in Depth.
	 * 
	 * @type String
	 */
	displayName: '',




	// ************************************************************************** //
	// LifeCycle methods - Those should be implemented
	// Various methods are executed at specific points in a component's lifecycle.



	/**
	 * Invoked once, both on the client and server, 
	 * immediately before the initial rendering occurs. 
	 * If you call setState within this method, render() 
	 * will see the updated state and will be executed 
	 * only once despite the state change.
	 */
	componentWillMount: function() {},




	/**
	 * Invoked once, only on the client (not on the server), 
	 * immediately after the initial rendering occurs. 
	 * At this point in the lifecycle, the component has a 
	 * DOM representation which you can access via 
	 * this.getDOMNode(). If you want to integrate with 
	 * other JavaScript frameworks, set timers using 
	 * setTimeout or setInterval, or send AJAX requests, 
	 * perform those operations in this method.
	 *
	 * Note: 
	 * 	Prior to v0.9, the DOM node was passed in as the 
	 * 	last argument. If you were using this, you can 
	 * 	still access the DOM node by calling this.getDOMNode().
	 */
	componentDidMount: function() {},




	/**
	 * Invoked when a component is receiving new props. 
	 * This method is not called for the initial render. 
	 * Use this as an opportunity to react to a prop 
	 * transition before render() is called by updating 
	 * the state using this.setState(). The old props 
	 * can be accessed via this.props. Calling 
	 * this.setState() within this function will not 
	 * trigger an additional render.
	 *
	 * @example
	 * 		componentWillReceiveProps: function(nextProps) {
	 *		    this.setState({
	 *		    	likesIncreasing: nextProps.likeCount > this.props.likeCount
	 *		    });
	 *		}
	 *
	 * Note: 
	 * There is no analogous method componentWillReceiveState. 
	 * An incoming prop transition may cause a state change, but 
	 * the opposite is not true. If you need to perform operations 
	 * in response to a state change, use componentWillUpdate.
	 */
	componentWillReceiveProps: function(/* object nextProps */) {},




	/**
	 * Invoked before rendering when new props or state are being received. 
	 * This method is not called for the initial render or when forceUpdate 
	 * is used. Use this as an opportunity to return false when you're 
	 * certain that the transition to the new props and state will not 
	 * require a component update.
	 *
	 * @example
	 * 	shouldComponentUpdate: function(nextProps, nextState) {
  	 *		return nextProps.id !== this.props.id;
	 *	}
	 *
	 * If shouldComponentUpdate returns false, then render() will be 
	 * completely skipped until the next state change. (In addition, 
	 * componentWillUpdate and componentDidUpdate will not be called.)
	 * By default, shouldComponentUpdate always returns true to prevent 
	 * subtle bugs when state is mutated in place, but if you are careful 
	 * to always treat state as immutable and to read only from props 
	 * and state in render() then you can override shouldComponentUpdate 
	 * with an implementation that compares the old props and state to 
	 * their replacements. If performance is a bottleneck, especially 
	 * with dozens or hundreds of components, use shouldComponentUpdate 
	 * to speed up your app.
	 * 
	 * @return Boolean
	 */
	shouldComponentUpdate: function(/* object nextProps, object nextState */) {}





	/**
	 * Invoked immediately before rendering when new props or state are 
	 * being received. This method is not called for the initial render.
	 * 
	 * Use this as an opportunity to perform preparation before an 
	 * update occurs.
	 *
	 * Note:
	 *	You cannot use this.setState() in this method. If you need to 
	 *	update state in response to a prop change, use 
	 *	componentWillReceiveProps instead.
	 * 
	 * @return {[type]}
	 */
	componentWillUpdate: function (/* object nextProps, object nextState */) {},





	/**
	 * Invoked immediately after updating occurs. This method is not 
	 * called for the initial render. 
	 * Use this as an opportunity to operate on the DOM when the 
	 * component has been updated.
	 *
	 * Note: 
	 * 	Prior to v0.9, the DOM node was passed in as the last argument. 
	 * 	If you were using this, you can still access the DOM node by 
	 * 	calling this.getDOMNode().
	 * 
	 * @return {[type]}
	 */
	componentDidUpdate: function( /* object prevProps, object prevState */ ) {},





	/**
	 * Invoked immediately before a component is unmounted from the DOM. 
	 * Perform any necessary cleanup in this method, such as invalidating 
	 * timers or cleaning up any DOM elements that were created 
	 * in componentDidMount.
	 * 
	 * @return {[type]}
	 */
	componentWillUnmount: function() {}
});

module.exports = EXAMPLE;