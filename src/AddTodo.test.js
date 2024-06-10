import { render, screen, fireEvent } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import App from './App';
import React from 'react';

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('test that App component doesn\'t render duplicate Task', () => {
  render(<App />);
  // Add assertions here
});

test('test that App component doesn\'t add a task without task name', () => {
  render(<App />);
  // Add assertions here
});

test('test that App component doesn\'t add a task without due date', () => {
  render(<App />);
  // Add assertions here
});

test('test that App component can be deleted through checkbox', () => {
  render(<App />);
  // Add assertions here
});

test('test that App component renders different colors for past due events', () => {
  render(<App />);
  // Add assertions here
});
