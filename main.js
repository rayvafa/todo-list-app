let React = require('react-native');

let {
	AppRegistry,
	Component,
	Navigator,
	Text
} = React;

import TaskList from './src/TaskList.js';
import TaskForm from './src/TaskForm.js';

class PluralTodo extends Component {

	constructor(props, context) {
		super(props, context);

		this.state = {
			todos: [
				{
					task: 'Learn React Native'
				},
				{
					task: 'Unlearn React Native'
				}
			]
		};
	}

	onAddStarted() {
		this.nav.push({
			name: 'taskform'
		});
	}

	renderScene(route, nav) {
		switch (route.name) {
			case 'taskform':
				return (
					<TaskForm />
				);
			default:
				return (
					<TaskList
						todos={ this.state.todos }
						onAddStarted={ this.onAddStarted.bind(this) }
					/>
				)
		}
	}

	configureScene() {
		return Navigator.SceneConfigs.FloatFromBottom;
	}

	render() {
		return (
			<Navigator
				configureScene={this.configureScene}
				initialRoute={{ name: 'tasklist', index: 0 }}
				ref={ (nav) => {
					this.nav = nav;
				} }
				renderScene={ this.renderScene.bind(this) }
			/>
		);
	}

}

AppRegistry.registerComponent('main', () => PluralTodo);
