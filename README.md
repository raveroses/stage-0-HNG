# Profile Card Project

A responsive and interactive profile card web application showcasing personal information, social media links, hobbies, and dislikes.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Testing](#testing)
- [Customization](#customization)

## 🎯 Overview

This project is a modern, responsive profile card that displays user information in an elegant two-column layout. It includes dynamic content loading for hobbies and dislikes, social media integration, and a clean, professional design.

## ✨ Features

- **Responsive Design**: Adapts seamlessly to different screen sizes
- **Social Media Integration**: Direct links to LinkedIn, Twitter, Facebook, and GitHub
- **Dynamic Content**: JavaScript-powered hobby and dislike lists
- **Modern UI**: Clean, professional design with Google Fonts (Inter)
- **SEO Friendly**: Semantic HTML structure with proper meta tags
- **Accessibility**: Includes ARIA labels and alt text for images
- **Performance Optimized**: Lazy loading for images

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Custom styling (external stylesheet)
- **JavaScript**: Dynamic content manipulation
- **Font Awesome 7.0.1**: Icon library for social media and UI elements
- **Google Fonts**: Inter font family

## 📁 Project Structure

```
project-root/
│
├── index.html          # Main HTML file
├── index.css           # Stylesheet
├── index.js            # JavaScript logic
└── image/
    └── realestae.jpg   # Profile image
```

## 🚀 Setup Instructions

1. **Clone or download the project**

   ```bash
   git clone <repository-url>
   cd profile-card-project
   ```

2. **Ensure all files are in the correct structure**

   - Place your profile image in the `image/` folder
   - Keep `index.html`, `index.css`, and `index.js` in the root directory

3. **Open the project**

   - Simply open `index.html` in your web browser
   - Or use a local development server (recommended):

     ```bash
     # Using Python
     python -m http.server 8000

     # Using Node.js (http-server)
     npx http-server
     ```

4. **View in browser**
   - Navigate to `http://localhost:8000` (or the appropriate port)

## 💻 Usage

### Updating Profile Information

Edit the HTML file to update:

- **Name**: Modify the `<h2>` tag with `data-testid="test-user-name"`
- **Bio**: Update the `<p>` tag with `data-testid="test-user-bio"`
- **Profile Image**: Replace `image/realestae.jpg` with your image
- **Social Links**: Update the `href` attributes in the social media links

### Adding Hobbies and Dislikes

The hobbies and dislikes are dynamically generated via JavaScript. Update the arrays in `index.js`:

```javascript
const hobbiesList = ["Coding", "Reading", "Gaming"];
const dislikesList = ["Bugs", "Poor Documentation"];
```

## 🧪 Testing

The project includes test identifiers (data-testid attributes) for automated testing:

- `test-profile-card`: Main container
- `test-user-avatar`: Profile image
- `test-user-name`: User's name
- `test-user-bio`: User biography
- `test-user-time`: Time display
- `test-user-social-links`: Social media container
- `test-user-social-linkedin`: LinkedIn link
- `test-user-social-twitter`: Twitter link
- `test-user-social-facebook`: Facebook link
- `test-user-social-github`: GitHub link
- `test-user-hobbies`: Hobbies list
- `test-user-dislikes`: Dislikes list

## 🎨 Customization

### Styling

Modify `index.css` to customize:

- Colors and themes
- Layout and spacing
- Typography
- Hover effects
- Responsive breakpoints

### Fonts

The project uses the Inter font family. To change fonts:

1. Visit [Google Fonts](https://fonts.google.com/)
2. Select your preferred font
3. Replace the font link in the `<head>` section
4. Update the CSS font-family properties

### Icons

Using Font Awesome 7.0.1. To change icons:

1. Visit [Font Awesome](https://fontawesome.com/)
2. Find your desired icon
3. Replace the `<i>` class names in the HTML

## 📱 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 👤 Author

**Odekunle Waris Titilope**

- Frontend Developer & Real Estate Consultant
- Location: Ibadan, Nigeria
- [LinkedIn](https://www.linkedin.com/in/diamond-stack-62a0b62a7/)
- [Twitter](https://x.com/TitilopeNode)
- [Facebook](https://web.facebook.com/waris.titilope.odekunle)
- [GitHub](https://github.com/raveroses)

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

**Note**: Remember to update the time display functionality in your JavaScript file to show the actual current time.
