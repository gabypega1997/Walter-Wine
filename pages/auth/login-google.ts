import { useState } from "react";

interface User {
    displayName: string;
    getIdToken: () => Promise<string>;
}

export default function Login() {
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSignIn = async () => {
        try {
            // Get the Google sign-in token from the Google Sign-In API
            const { id_token } = await window.gapi.auth2
                .getAuthInstance()
                .signIn();

            // Send the token to the server to authenticate the user with Firebase Authentication
            const response = await fetch("/api/auth/google", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ idToken: id_token }),
            });

            if (response.ok) {
                // Set the authenticated user in state
                const { user } = await response.json();
                setUser(user);
            } else {
                // Handle the error
                setError("Failed to sign in with Google");
            }
        } catch (error) {
            console.error(error);
            setError("Failed to sign in with Google");
        }
    };

    const handleSignOut = async () => {
        try {
            if (!user) {
                return;
            }

            // Send a sign-out request to the server
            const response = await fetch("/api/auth/google", {
                method: "DELETE",
                headers: { Authorization: `Bearer ${await user.getIdToken()}` },
            });

            if (response.ok) {
                // Clear the authenticated user from state
                setUser(null);
            } else {
                // Handle the error
                setError("Failed to sign out");
            }
        } catch (error) {
            console.error(error);
            setError("Failed to sign out");
        }
    };

    return (
        <div>
            {user ? (
                <div>
                    <p>Signed in as {user.displayName}</p>
                    <button onClick={handleSignOut}>Sign out</button>
                </div>
            ) : (
                <div>
                    <button onClick={handleSignIn}>Sign in with Google</button>
                    {error && <p>{error}</p>}
                </div>
            )}
        </div>
    );
}
