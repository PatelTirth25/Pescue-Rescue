# Animal Rescue Website

This is an animal rescue website built with Next.js. The website allows users to log in using their GitHub account, send data for rescue with location, donate for animals, and adopt animals. The site is fully responsive and works well on both desktop and mobile devices.

## Features

- **User Authentication**: Login using GitHub with NextAuth.
- **Data Submission**: Users can send data for rescue including location details.
- **Donations**: Users can donate for animal welfare.
- **Adoptions**: Users can adopt animals after logging in.
- **Responsive Design**: Fully responsive, works on all screen sizes.

## Technologies Used

- **Next.js**: React framework for server-rendered applications.
- **NextAuth**: Authentication for Next.js applications.
- **MongoDB**: Database to store user and animal data.
- **Razorpay**: Payment gateway for handling donations.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/PatelTirth25/Pescue-Rescue.git
    cd Pescue-Rescue
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Setup environment variables**:

    Create a `.env` file in the root of your project and add the following variables:
    ```env
    GITHUB_ID=<your-github-client-id>
    GITHUB_SECRET=<your-github-client-secret>
    MONGODB_URI=<your-mongodb-uri>
    NEXT_PUBLIC_RAZORPAY_ID=<your-razorpay-public-id>
    RAZORPAY_SECRET=<your-razorpay-secret-key>
    ```

4. **Run the development server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

### Login with GitHub

Users can log in using their GitHub account. This is managed by NextAuth.

### Sending Rescue Data

After logging in, users can send data for animal rescue, including their location and image of the animal in need.

### Donating for Animals

Users can make donations to support the animals using Razorpay as the payment gateway.

### Adopting Animals

Logged-in users can schedule animal adoption.

## Contributing

Contributions are welcome! Please create an issue or submit a pull request for any features, bug fixes, or enhancements.

