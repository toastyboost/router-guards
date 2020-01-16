import { Route } from './routes';

type ObjectConfig<C> = {
  [key: string]: Route<C>;
};

export function toArray<C>(config: ObjectConfig<C>): Route<C>[] {
  return Object.keys(config).reduce<Route<C>[]>((routesList, name) => {
    routesList.push({ ...config[name], name });
    return routesList;
  }, []);
}
