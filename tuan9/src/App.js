import React from 'react';
import { SafeAreaProvider as SafeAreaProviderSafeAreaProvider } from 'react-native-safe-area-context';
import Header from './components/Header';
import ProjectManagement from './components/ProjectManagement';
import Categories from './components/Categories';
import PopularCourses from './components/PopularCourses';
function App() {
  return (
    <SafeAreaProviderSafeAreaProvider>
      <Header />
      <ProjectManagement />
      <Categories/>
      <PopularCourses/>
      {/* Các component và nội dung khác của bạn */}
      </SafeAreaProviderSafeAreaProvider>
  );
}

export default App;
