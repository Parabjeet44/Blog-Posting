const express = require('express');
const path = require('path');
const User = require('./models/User');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the "build" directory
app.use(express.static(path.join(__dirname, 'jsx')));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    if (user.password !== password) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Authentication successful
    return res.json({ success: true });
  } catch (err) {
    console.error('Error authenticating user:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});






