import Autosuggest from 'react-autosuggest';
import * as AutosuggestHighlightMatch from 'autosuggest-highlight/match';
import * as AutosuggestHighlightParse from 'autosuggest-highlight/parse';
import React, {Component} from 'react';
import Auto from './Auto.css'

const products = [
  {
    title: 'محصولات',
    products: [
      {
        name: 'زعفران سرگل',
        year: 1972
      },
      {
          name: 'زعفران رشته کامل',
          year: 1972
      },
      {
      name: 'زعفران ریشه',
      year: 1972
      },
    ]
  },
  {
    title: 'وبلاگ',
    products: [
      {
        name: 'دسر زعفرانی',
        year: 1983
      },
      {
        name: 'زرشک پلو',
        year: 1987
      }
    ]
  },
  {
    title: 'تیم فنی',
    products: [
      {
        name: 'خرما',
        year: 1990
      },
      {
        name: 'زعفران خوب',
        year: 1991
      },
      {
        name: 'زرشک پفکی',
        year: 1995
      },
      {
        name: 'زرشک دانه اناری',
        year: 1995
      },
    ]
  },
];
  
// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());
  
  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp(escapedValue, 'i');
  
    return products
    .map(section => {
      return {
        title: section.title,
        products: section.products.filter(product => regex.test(product.name))
      };
    })
    .filter(section => section.products.length > 0);

}
  
  function getSuggestionValue(suggestion) {
    return suggestion.name;
  }
  
  function renderSuggestion(suggestion, { query }) {
    const suggestionText = `${suggestion.name}`;
    const matches = AutosuggestHighlightMatch(suggestionText, query);
    const parts = AutosuggestHighlightParse(suggestionText, matches);
  
    return (
      <span className="name">
        {
          parts.map((part, index) => {
            const className = part.highlight ? 'highlight' : '';

            return (
              <span className={className} key={index}>{part.text ? part.text : 'no such thing'}</span>
            );
          })
        }
      </span>
    );
  }
  
  function renderSectionTitle(section) {
    return (
      <strong>{section.title}</strong>
    );
  }
  
  function getSectionSuggestions(section) {
    return section.products;
  }
  
  class Example extends React.Component {
    constructor() {
      super();
  
      this.state = {
        value: '',
        suggestions: []
      };    
    }
  
    onChange = (event, { newValue, method }) => {
      this.setState({
        value: newValue
      });
    };
    
    onSuggestionsFetchRequested = ({ value }) => {
      this.setState({
        suggestions: getSuggestions(value)
      });
    };
  
    onSuggestionsClearRequested = () => {
      this.setState({
        suggestions: []
      });
    };
  
    render() {
      const { value, suggestions } = this.state;
      const inputProps = {
        placeholder: "کلمه زعفران یا زرشک...",
        value,
        onChange: this.onChange
      };
  
      return (
        <Autosuggest 
          multiSection={true}
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          renderSectionTitle={renderSectionTitle}
          getSectionSuggestions={getSectionSuggestions}
          inputProps={inputProps} />
      );
    }
  }
  
export default Example;
  