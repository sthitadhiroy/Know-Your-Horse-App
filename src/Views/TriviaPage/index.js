import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  AsyncStorage,
  View,
  Button,
  TextInput,
  Text,
  Linking,
  Icon,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Image, Header} from 'react-native-elements';
import {Container, Left, Right, Body, Title} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';

class TriviaPage extends Component {
  FunctionToConfirm = () => {
    this.props.navigation.navigate('Menu');
  };
  render() {
    return (
      <ImageBackground
        source={require('../../Images/t004.jpeg')}
        style={{width: '100%', height: '100%'}}>
        <ScrollView>
          <View>
            <Header
              containerStyle={{
                backgroundColor: '#e65c12',
                height: 50,
              }}
              placement="left"
              leftComponent={{icon: 'home', color: '#fff', marginBottom: 45}}
              centerComponent={{
                text: 'Trivia about Horse',
                style: {color: '#fff', marginBottom: 40, fontWeight: 'bold'},
              }}
            />

            <View style={{padding: 10}} />
            <Text
              h1
              style={{textAlign: 'center', fontWeight: 'bold', fontSize: 18}}>
              Interesting Facts About Horses
            </Text>
            <View style={{padding: 5}} />

            <Image
              style={{
                height: 290,
                width: 400,
                padding: 10,
              }}
              source={require('../../Images/horse-facts01.jpg')}
            />
            <View style={{padding: 5}} />
            <Text h3 style={{padding: 7}}>
              Horses are beautiful creatures to look at, and thousands of
              fanatics enjoy riding them or showing them every year. Here are
              some important facts you might like to know about horses.
            </Text>
            <Text h1 style={{padding: 7, fontWeight: 'bold'}}>
              #1/ Horses are called different names depending on their gender.
            </Text>
            <Text h3 style={{padding: 7}}>
              HA male horse is called a stallion and a female horse is a mare. A
              male horse which has been castrated is known as a gelding.
            </Text>
            <View style={{padding: 2}} />
            <Text h1 style={{padding: 7, fontWeight: 'bold'}}>
              #2/ Baby horses even have different names!
            </Text>
            <Text h3 style={{padding: 7}}>
              Young horses have different names – a young male is called a colt
              and the young females are fillies.
            </Text>
            <View style={{padding: 2}} />
            <Text h1 style={{padding: 7, fontWeight: 'bold'}}>
              #3/ New-born horses can walk shortly after birth.
            </Text>
            <Text h3 style={{padding: 7}}>
              Baby horses can walk and run after just a few hours of being born.
            </Text>
            <View style={{padding: 2}} />
            <Text h1 style={{padding: 7, fontWeight: 'bold'}}>
              #4/ There are fewer bones in a horse than in humans.
            </Text>
            <Text h3 style={{padding: 7}}>
              It’s only one bone less, but in total, there are 205 bones in the
              skeleton of a horse.
            </Text>
            <Image
              style={{
                height: 290,
                width: 400,
                padding: 10,
              }}
              source={require('../../Images/old-billy-horse.jpg')}
            />
            <View style={{padding: 2}} />
            <Text h1 style={{padding: 7, fontWeight: 'bold'}}>
              #5/ The oldest horse lived over twice as long than he was supposed
              to.
            </Text>
            <Text h3 style={{padding: 7}}>
              Horses which have been tamed usually live to be around 25 years
              old. However, the oldest domestic horse on record was Old Billy,
              who died at the age of 62.
            </Text>
            <View style={{padding: 2}} />
            <Text h1 style={{padding: 7, fontWeight: 'bold'}}>
              #6/ Horses can sleep standing up or lying down.
            </Text>
            <Text h3 style={{padding: 7}}>
              Many people think that when a horse is lying down that means it’s
              sick. However, these creatures can sleep either standing up or
              lying down.
            </Text>
            <View style={{padding: 2}} />
            <Text h1 style={{padding: 7, fontWeight: 'bold'}}>
              #7/ Horses have a lookout.
            </Text>
            <Text h3 style={{padding: 7}}>
              A group of horses will not go to sleep at the same time – at least
              one of them will stay awake to watch out for the others.
            </Text>
            <View style={{padding: 2}} />
            <Text h1 style={{padding: 7, fontWeight: 'bold'}}>
              #8/ Horses don’t smile to show happiness.
            </Text>
            <Text h3 style={{padding: 7}}>
              Horses are often seen in photographs “laughing” or “smiling”, but
              this movement is actually to help them smell better.
            </Text>
            <View style={{padding: 2}} />
            <Text h1 style={{padding: 7, fontWeight: 'bold'}}>
              #9/ Their diet is plant-based.
            </Text>
            <Text h3 style={{padding: 7}}>
              Horses only eat plants, making them herbivores.
            </Text>

            <View style={{padding: 2}} />
            <Text h1 style={{padding: 7, fontWeight: 'bold'}}>
              #10/ The fastest horse ran over double the usual speed!
            </Text>
            <Text h3 style={{padding: 7}}>
              For a regular horse, their top speed is approximately 27 miles per
              hour, although the fastest horse ever recorded could reach 55
              miles per hour!
            </Text>

            <View style={{padding: 2}} />
            <Text h1 style={{padding: 7, fontWeight: 'bold'}}>
              #11/ There’s no need to worry about horse population.
            </Text>
            <Text h3 style={{padding: 7}}>
              There are an estimated 60 million horses in the world, combining
              wild and domesticated horses.
            </Text>
            <Image
              style={{
                height: 290,
                width: 400,
                padding: 10,
              }}
              source={require('../../Images/facts-on-horses.jpg')}
            />

            <View style={{padding: 2}} />
            <Text h1 style={{padding: 7, fontWeight: 'bold'}}>
              #12/ Horses have exceptional vision!
            </Text>
            <Text h3 style={{padding: 7}}>
              The eyes of a horse are bigger than those of any other land
              mammal, and the fact they are located on the side of their heads
              means they can see almost 360 degrees.
            </Text>

            <View style={{padding: 2}} />
            <Text h1 style={{padding: 7, fontWeight: 'bold'}}>
              #13/ Horses can’t see in full-color.
            </Text>
            <Text h3 style={{padding: 7}}>
              Experts used to believe that horses were completely color-blind,
              although this has now been disproven. They can, however, see
              certain colors a lot clearer than others.
            </Text>

            <View style={{padding: 2}} />
            <Text h1 style={{padding: 7, fontWeight: 'bold'}}>
              #14/ Horses float when they run.
            </Text>
            <Text h3 style={{padding: 7}}>
              Well, sort of! When a horse gallops, all four hooves are off the
              ground at one point.
            </Text>
            <Image
              style={{
                height: 290,
                width: 400,
                padding: 10,
              }}
              source={require('../../Images/horse-measurement-hands.jpg')}
            />
            <View style={{padding: 2}} />
            <Text h1 style={{padding: 7, fontWeight: 'bold'}}>
              #15/ Horses have their own form of measurement.
            </Text>
            <Text h3 style={{padding: 7}}>
              Rather than being measured in feet and inches, horses are measured
              in hands. A hand is equivalent to four inches. Ponies are horses
              which are under 14.2 hands high.
            </Text>

            <View style={{padding: 2}} />
            <Text h1 style={{padding: 7, fontWeight: 'bold'}}>
              #16/ The tallest horse ever was over seven hands taller than a
              normal horse.
            </Text>
            <Text h3 style={{padding: 7}}>
              Sampson was a Shire horse and the tallest on record. He stood at a
              staggering 21.2 hands high.
            </Text>

            <View style={{padding: 2}} />
            <Text h1 style={{padding: 7, fontWeight: 'bold'}}>
              #17/ The smallest horse was barely taller than a foot.
            </Text>
            <Text h3 style={{padding: 7}}>
              By contrast, the smallest horse ever was a tiny 14-inch pony from
              New Hampshire. His name was Einstein.
            </Text>

            <View style={{padding: 2}} />
            <Text h1 style={{padding: 7, fontWeight: 'bold'}}>
              #18/ Horses can be cloned.
            </Text>
            <Text h3 style={{padding: 7}}>
              n 2003, a horse was cloned for the first time. The cloning took
              place in Italy.
            </Text>
            <Image
              style={{
                height: 290,
                width: 400,
                padding: 10,
              }}
              source={require('../../Images/horse-cloning.jpg')}
            />
            <View style={{padding: 2}} />
            <Text h1 style={{padding: 7, fontWeight: 'bold'}}>
              #19/ In some places, horse meat is a delicacy.
            </Text>
            <Text h3 style={{padding: 7}}>
              In certain countries, including France, horse meat is considered
              an expensive delicacy. Although it is illegal in several other
              countries, the French enjoy eating horse heart and horse brains.
            </Text>

            <View style={{padding: 2}} />
            <Text h1 style={{padding: 7, fontWeight: 'bold'}}>
              #20/ Horses can remember more than you think.
            </Text>
            <Text h3 style={{padding: 7}}>
              Studies showed that horses have excellent memories – possibly even
              better than that of an elephant!
            </Text>
            <Image
              style={{
                height: 290,
                width: 400,
                padding: 10,
              }}
              source={require('../../Images/horse-smiling-teeth.jpg')}
            />
            <View style={{padding: 2}} />
            <Text h1 style={{padding: 7, fontWeight: 'bold'}}>
              #21/ You Can Estimate a Horse's Age by Its Teeth
            </Text>
            <Text h3 style={{padding: 7}}>
              While you can't tell the exact age of a horse by its teeth, you
              can estimate its age. Horses need proper equine dental care for
              their teeth, but sometimes a horse lives longer than its teeth do,
              so extra care is needed when feeding senior horses.
            </Text>
            <View style={{padding: 2}} />
            <Image
              style={{
                height: 290,
                width: 400,
                padding: 10,
              }}
              source={require('../../Images/21.webp')}
            />
            <View style={{padding: 2}} />
            <Text h1 style={{padding: 7, fontWeight: 'bold'}}>
              #22/ The American Quarter Horse Is the World's Most Popular Breed
            </Text>
            <Text h3 style={{padding: 7}}>
              Appreciated by beginner riders and professional horsemen alike,
              the American quarter horse is the world's most popular breed.
              Learn more about the American quarter horse.
            </Text>
            <View style={{padding: 2}} />
            <Image
              style={{
                height: 290,
                width: 400,
                padding: 10,
              }}
              source={require('../../Images/22.webp')}
            />
            <View style={{padding: 2}} />
            <Text h1 style={{padding: 7, fontWeight: 'bold'}}>
              #23/ Arabian Horses Have One Less Vertebrae Than Other Breeds
            </Text>
            <Text h3 style={{padding: 7}}>
              The Arabian horse is the foundation of many other light horse
              breeds. They also possess some unique characteristics. Arabian
              horses have one fewer vertebrae, rib and tail bone than other
              horses. Learn about the Arabian horse and its unique history and
              characteristics.
            </Text>
            <View style={{padding: 2}} />
            <Image
              style={{
                height: 290,
                width: 400,
                padding: 10,
              }}
              source={require('../../Images/23.webp')}
            />
            <View style={{padding: 2}} />
            <Text h1 style={{padding: 7, fontWeight: 'bold'}}>
              #24/ Horses Were Domesticated by Humans More Than 3,000 Years Ago
            </Text>
            <Text h3 style={{padding: 7}}>
              Dogs may have become domesticated around 14,000 years ago. Cats
              became human companions about 8,500 years ago. Humankind's
              relationship with the horse began a little more recently, about
              3,500 B.C. although some evidence has come to light that horses
              may have been domesticated even earlier.
            </Text>
            <View style={{padding: 2}} />
            <Image
              style={{
                height: 290,
                width: 400,
                padding: 10,
              }}
              source={require('../../Images/24.webp')}
            />
            <View style={{padding: 2}} />
            <Text h1 style={{padding: 7, fontWeight: 'bold'}}>
              #25/ The Original "Horse" Was the Size of a Golden Retriever
            </Text>
            <Text h3 style={{padding: 7}}>
              The original horse was no larger than a golden retriever.
              Diminutive Hyracotherium may have looked more like a small goat or
              deer than a modern-day horse. Hyracotherium lived during the
              Eocene epoch about 50 million years ago.
            </Text>
            <View style={{padding: 2}} />
            <Image
              style={{
                height: 290,
                width: 400,
                padding: 10,
              }}
              source={require('../../Images/25.webp')}
            />
            <View style={{padding: 5}} />
            <View style={{padding: 20}}>
              <Button
                title="Test your knowledge ? "
                onPress={this.FunctionToConfirm}
              />
            </View>
            <View style={{padding: 10}} />
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

export default TriviaPage;
