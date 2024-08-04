// src/components/ui/tabs.js
import React from 'react';

const Tabs = ({ children }) => <div className="tabs">{children}</div>;
const TabsList = ({ children }) => <div className="tabs-list">{children}</div>;
const TabsTrigger = ({ children }) => <div className="tabs-trigger">{children}</div>;
const TabsContent = ({ children }) => <div className="tabs-content">{children}</div>;

export { Tabs, TabsList, TabsTrigger, TabsContent };
