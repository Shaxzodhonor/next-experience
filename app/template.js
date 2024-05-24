export default function Template({ children }) {
    console.log('template osha');
    return <div className="bg-orange-100">
        ---------------------
        {children}
        ---------------------
    </div>
  }