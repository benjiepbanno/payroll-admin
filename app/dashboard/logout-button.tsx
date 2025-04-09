import { useAuthStore } from "@/store/auth-store";

export default function LogoutButton() {
    const { logout } = useAuthStore();

    const handleLogout = () => {
        logout();
        window.location.href = "https://your-php-app.com/logout"; // Redirect to PHP logout
    };

    return <button onClick={handleLogout}>Logout</button>;
}
