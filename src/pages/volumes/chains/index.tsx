import { getStaticPropsByType } from '~/utils/adaptorsPages/[type]/chains'
import { type } from '../../volumes'
import { withPerformanceLogging } from '~/utils/perf'
export const getStaticProps = withPerformanceLogging('volumes/chains/index', getStaticPropsByType(type))
export { default } from '../../volumes'
