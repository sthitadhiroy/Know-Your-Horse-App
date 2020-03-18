import React from 'react';
import {View, Text, ScrollView, ImageBackground} from 'react-native';
import quiz from '../../quizService';
import Question from './question';
import {Divider, CheckBox, Header} from 'react-native-elements';

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      score: 0,
    };
    this.incrementScore = this.incrementScore.bind(this);
  }

  async componentDidMount() {
    const data = await quiz();
    this.setState({data});
  }

  incrementScore() {
    this.setState({score: this.state.score + 1});
  }

  render() {
    return (
      <ScrollView>
        <ImageBackground
          source={require('../../Images/quizbc.jpg')}
          style={{width: '100%', height: '100%'}}>
          <Header
            containerStyle={{
              backgroundColor: '#e65c12',
              height: 50,
            }}
            placement="left"
            leftComponent={{icon: 'home', color: '#fff', marginBottom: 45}}
            centerComponent={{
              text: 'MY QUIZ',
              style: {color: '#fff', marginBottom: 40, fontWeight: 'bold'},
            }}
          />

          <View>
            {this.state.data.map(dt => (
              <Question
                key={dt.questionId}
                question={dt.question}
                answers={dt.answers}
                correct={dt.correct}
                incrementScore={this.incrementScore}
              />
            ))}
          </View>
          <View style={{padding: 10}} />
          <View style={{padding: 20, borderWidth: 2, borderRadius: 20}}>
            <Text style={{textAlign: 'center'}}>
              Your Score is {this.state.score}/5
            </Text>
          </View>
          <View style={{padding: 10}} />
        </ImageBackground>
      </ScrollView>
    );
  }
}

export default MainPage;
