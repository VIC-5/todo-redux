import React from 'react';
import { Footer } from './Footer';
import { AddTodoComponent } from '../Containers/AddTodoComponent';
import { VisibleTodoList } from '../Containers/VisibleTodoList';

export const App = () => (
    <div>
        <AddTodoComponent />
        <VisibleTodoList />
        <Footer />
    </div>
);