'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _HomeJsx = require('./Home.jsx');

var _HomeJsx2 = _interopRequireDefault(_HomeJsx);

var _AboutJsx = require('./About.jsx');

var _AboutJsx2 = _interopRequireDefault(_AboutJsx);

var _Error404Jsx = require('./Error404.jsx');

var _Error404Jsx2 = _interopRequireDefault(_Error404Jsx);

function Pages() {
  return _react2['default'].createElement(
    'main',
    { role: 'application' },
    _react2['default'].createElement(_reactRouter.Match, {
      pattern: '/',
      exactly: true,
      component: _HomeJsx2['default']
    }),
    _react2['default'].createElement(_reactRouter.Match, {
      pattern: '/about',
      exactly: true,
      component: _AboutJsx2['default']
    }),
    _react2['default'].createElement(_reactRouter.Miss, { component: _Error404Jsx2['default'] })
  );
}
exports['default'] = Pages;
module.exports = exports['default'];