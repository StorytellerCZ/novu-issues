import React from 'react';
import { Hello } from './Hello';
import { Info } from './Info';
import { Inbox } from '@novu/react'

const applicationIdentifier = ''
const subscriberId = ''

export const App = () => (
  <div>
    <h1>Welcome to Meteor and Novu!</h1>
    <Inbox applicationIdentifier={applicationIdentifier} subscriberId={subscriberId} />
    <Hello />
    <Info />
  </div>
);
