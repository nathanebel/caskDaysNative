import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import TabOne from './FoodTab'
import TabTwo from './LocationTab'
import TokensTab from './TokensTab'

import { Container, Content, Tabs } from 'native-base'

import styles from '../global/styles'

class Info extends Component {

  constructor(props) {
    super(props)
  }

    render() {
      return (
        <Container>
          <Content>
            <Tabs>
              <TabOne tabLabel='One' />
              <TabTwo tabLabel='Two' />
            </Tabs>
          </Content>
        </Container>
      );
    }
}

export default Info