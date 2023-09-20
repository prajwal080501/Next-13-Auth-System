const UserProfile = ({ params }: any) => {
    return (
        <div>
            <h1 className="text-lg font-bold text-blue-500">Profile</h1>

            <hr />

            <p className="text-4xl font-bold">Profile Page {params.id}</p>
        </div>
    )
}
export default UserProfile;