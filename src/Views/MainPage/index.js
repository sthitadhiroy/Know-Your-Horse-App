import React from 'react';
import {View, Text, ScrollView, ImageBackground} from 'react-native';
import quiz from '../../quizService';
import Question from './question';
import {Button, Overlay, Header, Image} from 'react-native-elements';
import picture from '../../Images/overlay.jpeg';

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      score: 0,
      isVisible: false,
    };

    this.overlayy = this.overlayy.bind(this);
    this.incrementScore = this.incrementScore.bind(this);
  }

  async componentDidMount() {
    const data = await quiz();
    this.setState({data});
  }

  incrementScore() {
    this.setState({score: this.state.score + 1});
  }
  overlayy() {
    this.setState({isVisible: true});
  }
  FunctionToConfirm = () => {
    this.setState({isVisible: false});
    this.props.navigation.navigate('Menu');
  };

  render() {
    return (
      <ScrollView>
        <ImageBackground
          source={require('../../Images/quizpage104.jpeg')}
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
          <Overlay
            isVisible={this.state.isVisible}
            onBackdropPress={() => this.setState({isVisible: false})}>
            <View>
              <View style={{height: '60%'}}>
                <Image source={picture} style={{width: 250, height: 250}} />
              </View>
              <View style={{padding: 10}} />
              <Text
                h1
                style={{
                  padding: 7,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                Score
              </Text>
              <Text
                h1
                style={{
                  padding: 7,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                {this.state.score}/5
              </Text>
              <View style={{padding: 30}} />

              <Button title="Play Again..!!" onPress={this.FunctionToConfirm} />
            </View>
          </Overlay>
          <View style={{padding: 20, borderWidth: 2, borderRadius: 20}}>
            <Button title="Results" onPress={this.overlayy} />
          </View>
          <View style={{padding: 10}} />
        </ImageBackground>
      </ScrollView>
    );
  }
}

export default MainPage;
