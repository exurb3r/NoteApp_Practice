

const handleSignup = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    setError(''); // Clears any previous error messages

    if (password !== confirmPassword) {
      setError('Passwords do not match. Please verify your typing.');
      return; // Exit the function early if passwords don't match
    }

    const BACKEND_URL = 'http://localhost:3000/api/signup'; // Replace with your actual backend endpoint

    const accountData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        username: username,
        password: password
    };

    try {
        const response = await fetch(BACKEND_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(accountData)
        });

        const data = await response.json();
        if (response.ok) {
            alert('Account created successfully! Redirecting to login...');
            navigate('/login'); // Redirect to login page after successful signup
        } else {
            setError(data.message || 'An error occurred during signup. Please try again.');
        }
    } catch (error) {
        setError('An error occurred while fetching data. Please try again.');
    }
    
    navigate('/login'); // Redirect to login page after successful signup
};

export default handleSignup;