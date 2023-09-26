### React Countdown Card

![npm](https://img.shields.io/npm/v/react-sale-countdown)
![npm](https://img.shields.io/npm/dt/react-sale-countdown)
![GitHub](https://img.shields.io/github/license/Myself-Pankaj/react-countdown-card)

### DEMO

![This is the demo ](https://res.cloudinary.com/attar-shop/image/upload/v1695755526/react-sale-countdown_uzhu7r.png)

<!-- _click [Here](https://sdcyi.csb.app/) to try demo_ -->

### Installation

- You can install `react-countdown-card` using npm or yarn.

    ```bash
    npm install react-countdown-card
    ```
In order to use `react-countdown-card`, you have to install  `react-router-dom`

### Description

React Countdown Card is a versatile package for creating stylish countdown timers in a card format. It's designed to make it easy to integrate countdowns into your React applications, particularly for sales, giveaways, or any time-sensitive events.


### Usage

Import the `CountdownCard` component in your React application and use it as follows:

```javascript
import React from 'react';
import {CountdownCardKit} from 'react-countdown-card';

function App() {
    const imageUrl ="https://t.ly/WIQhD";
    const endDate = "Sunday 01 October 2023, 12:00 AM";
    const title = "Fossil watch Give away";
    const description = "This is a giveaway of Fossil Watch";
  return (
    <div>
      {/* Your other content */}
      <CountdownCardKit
        imageUrl={imageUrl}
        endDate={endDate}
        title={title}
        description={description}
      />
    </div>
  );
}

export default App;
```

### Props

- `imageUrl`: URL of the image to display in the card.
- `endDate`: Date and time when the countdown should end (in 12hrs format).
- `title`: Title for the card.
- `description`: Description or message for the card.

## Author

#### [Pankaj](https://my-portfolio-sliv.onrender.com/)

[![Instagram Icon](https://img.icons8.com/color/48/000000/instagram-new.png)](https://www.instagram.com/ifeelpankaj) 
[![LinkedIn Icon](https://img.icons8.com/color/48/000000/linkedin.png)](https://www.linkedin.com/in/ifeelpankaj)

Feel free to reach out for any questions or feedback!

