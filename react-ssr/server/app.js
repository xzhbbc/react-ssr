const express = require('express')

const app = express()


import React from 'react';
import Home from '../src/Component/Home/Home'
import { renderToString } from 'react-dom/server';
import {render} from './utils';
import { getStore } from '../src/redux/index';

// const content = renderToString(<Home />);

var path = require('path');

var statics = path.resolve(__dirname, '..');

app.use(express.static(statics + '/publicssr'));
// app.use(express.static('public'));

app.get('*', function (req, res) {
  const store = getStore();
  // console.log(store)
  res.send(render(store, req));
});

   
app.listen(3001, () => {
  console.log('listen:3001')
})