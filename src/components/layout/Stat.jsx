import PropTypes from "prop-types"

function Stat({ children, statTitle, statValue }) {
    return <div className="stat">
        <div className="stat-figure text-secondary">
            {children}
        </div>
        <div className="stat-title pr-5">
            {statTitle}
        </div>
        <div className="stat-value pr-5 text-3xl md:text-4xl">
            {statValue}
        </div>
    </div>
}

Stat.propTypes = {
    children: PropTypes.node.isRequired,
    statTitle: PropTypes.string.isRequired,
    statValue: PropTypes.string.isRequired,
}

export default Stat