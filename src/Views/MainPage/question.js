import React from 'react';
import {View, Text, ScrollView, ImageBackground} from 'react-native';
import {Divider, CheckBox, Header} from 'react-native-elements';

class Question extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAnsIdx: -1,
      isCorrect: false,
    };

    this.onPress = this.onPress.bind(this);
  }

  onPress(idx, ans) {
    this.setState({selectedAnsIdx: idx});
    if (ans === this.props.correct) {
      this.props.incrementScore();
    }
  }

  render() {
    return (
      <ScrollView>
        <View>
          <Text style={{padding: 10, fontWeight: 'bold'}}>
            {this.props.question}
          </Text>
          <View style={{height: 10}} />

          <View>
            {this.props.answers.map((ans, idx) => (
              <View key={idx}>
                <CheckBox
                  title={ans}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checked={this.state.selectedAnsIdx === idx}
                  onPress={() => this.onPress(idx, ans)}
                />
              </View>
            ))}
          </View>

          <Divider style={{backgroundColor: 'black'}} />
          <Divider style={{backgroundColor: 'black'}} />
          <Divider style={{backgroundColor: 'black'}} />
        </View>
      </ScrollView>
    );
  }
}

export default Question;
