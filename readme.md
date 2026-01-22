# Scripture Memory Game - Web App

## 🎮 Live Interactive Web Application

This is a fully-functional web app for scripture memorization that you can:
- Deploy to Netlify (or any web host) for FREE
- Access from any device with a browser
- Manage multiple verses for different classes
- Use without any PowerPoint or Google Slides

## ✨ Features

### Game Mode
- Click word bubbles to make them disappear
- **Placeholder spots remain** - shows dashed outline where each word was
- Helps maintain visual structure for better memorization
- Beautiful animations when bubbles "pop"
- Completion celebration when all words are memorized
- Reset button to try again
- Select from any saved verses

### Admin Mode
- Add unlimited scripture verses
- Edit existing verses
- Delete verses you no longer need
- Organize verses by class or topic
- All data saved in browser storage (no database needed!)

## 🚀 Deploy to Netlify (5 Minutes!)

### Option 1: Drag & Drop (Easiest!)

1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the `index.html` file into the upload area
3. Done! Your app is live with a URL like `https://random-name-12345.netlify.app`

### Option 2: GitHub Deploy (Best for Updates)

1. **Create a GitHub repository:**
   - Go to [github.com](https://github.com) and create a new repository
   - Name it something like `scripture-memory-game`

2. **Upload the file:**
   - Click "uploading an existing file"
   - Drag `index.html` into the upload area
   - Commit the file

3. **Connect to Netlify:**
   - Go to [netlify.com](https://netlify.com) and sign up/login
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and authorize Netlify
   - Select your repository
   - Click "Deploy site"

4. **Done!** Your site will be live at a URL like `https://your-site-name.netlify.app`

### Option 3: Netlify CLI (For Developers)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=.
```

## 📱 Using the App

### For Teachers/Leaders

1. **Navigate to the Admin Tab** (⚙️ Manage Verses)

2. **Add Your First Verse:**
   - Click "+ Add New Verse"
   - Enter a name (e.g., "John 3:16 - Sunday School Class A")
   - Enter the reference (e.g., "John 3:16 NIV")
   - Paste or type the verse text
   - Click "Save Verse"

3. **Organize by Class:**
   - Name verses with class identifiers: "Psalm 23 - Youth Group"
   - Or by week: "Memory Verse - Week 1"
   - Or by age group: "John 3:16 - Kids 5-7"

4. **Before Class:**
   - Add the verse(s) you want students to memorize
   - Test the game to make sure it works
   - Share your Netlify URL with students or display on projector

### For Students/Players

1. **Go to the Game Tab** (🎮 Play Game)

2. **Select a verse** from the dropdown menu

3. **Read the verse** with all words visible

4. **Click each word** as you recite the verse - the bubble will transform into a dashed placeholder (shows "_ _ _")

5. **Keep practicing** - the placeholder spots help you remember the word order and structure

6. **Try again** with all words hidden - can you fill in the blanks?

7. **Reset** when you want to start over with all words visible

## 💾 Data Storage

**Important:** This app uses browser localStorage, which means:

✅ **Pros:**
- No server or database needed
- Free forever
- Fast and responsive
- Works offline
- Private - data never leaves the device

❌ **Limitations:**
- Data is stored per browser/device
- Clearing browser data will erase verses
- Different devices have different verse lists

### Managing Data Across Devices

**For Single Device Use:**
- Perfect as-is! Just bookmark the URL

**For Multiple Devices:**
- You'll need to manually re-enter verses on each device
- OR upgrade to cloud storage (see Advanced section)

**For Classroom/Church Use:**
- Deploy one central URL
- Teacher manages verses on their device
- Students just play (they don't need to add verses)
- Project on screen for group play

## 🎨 Customization

### Change Colors

Edit the CSS gradient in `index.html` (around line 14):

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

Try these color schemes:
- Ocean: `#2193b0 0%, #6dd5ed 100%`
- Sunset: `#f83600 0%, #f9d423 100%`
- Forest: `#56ab2f 0%, #a8e063 100%`
- Royal: `#6441a5 0%, #2a0845 100%`

### Change Fonts

Around line 11, change:

```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

To any web-safe font or add a Google Font link.

### Adjust Bubble Size

Find `.word-bubble` (around line 126) and change:
- `font-size: 1.5em;` - make bubbles larger or smaller
- `padding: 15px 25px;` - adjust bubble spacing

## 🔧 Advanced Options

### Option: Add Cloud Storage

If you need verses synced across devices, you can add backend storage:

1. **Use Netlify Functions + Supabase:**
   - Free tier supports plenty of verses
   - Share data across all users
   - Requires some coding

2. **Use Google Sheets API:**
   - Store verses in a Google Sheet
   - Fetch them in the app
   - Medium difficulty

3. **Use Firebase:**
   - Real-time database
   - Free tier available
   - Medium difficulty

I can help you implement any of these if needed!

### Option: Add User Authentication

If you want different teachers to have separate verse collections:
- Add Netlify Identity (free)
- Or use Auth0, Firebase Auth, etc.

### Option: Export/Import Verses

You could add buttons to:
- Export verses as JSON file
- Import verses from JSON file
- This allows manual backup/restore

## 📊 Use Cases

### Sunday School
- Create verses for each age group
- Name them: "Pre-K Week 1", "Elementary Week 1", etc.
- Play on classroom TV/projector

### Youth Group
- Add weekly memory verses
- Let students access on their phones
- Track who's memorized what (with cloud version)

### Bible Study
- Add verses related to current study topic
- Use for opening/closing activities
- Everyone can play along on their devices

### Family Devotions
- Parents add verses for the week
- Kids practice on tablets
- Make it a competition!

### VBS (Vacation Bible School)
- Add daily verses for each day of VBS
- Project on big screen for group play
- Easy to update throughout the week

### Homeschool
- Integrate with Bible curriculum
- Add verses as you study them
- Track progress with multiple verses

## 🆘 Troubleshooting

**Verses won't save:**
- Check if browser allows localStorage
- Try a different browser
- Disable private/incognito mode

**Site won't load:**
- Check your Netlify deployment status
- Ensure index.html was uploaded correctly
- Check browser console for errors

**Bubbles won't pop:**
- Refresh the page
- Clear browser cache
- Try a different browser

**Lost all verses:**
- Browser data was cleared
- Keep a backup list in a document
- Consider cloud storage upgrade

## 📞 Support & Updates

If you need help with:
- Customization
- Adding features
- Cloud storage setup
- Authentication
- Different styling

Just ask! This single-file app is designed to be easy to modify and extend.

## 🎯 Future Enhancement Ideas

- [ ] Add timer mode for challenges
- [ ] Track high scores
- [ ] Multiple difficulty levels
- [ ] Audio pronunciation
- [ ] Print-friendly verse cards
- [ ] Sharing verses via URL
- [ ] Mobile app version
- [ ] Offline PWA support
- [ ] Multiple language support
- [ ] Admin password protection

## 📄 License

Free to use for personal, educational, and ministry purposes!
Modify and share as needed to spread God's Word.

---

**Enjoy helping others memorize scripture in a fun, interactive way! 📖✨**
