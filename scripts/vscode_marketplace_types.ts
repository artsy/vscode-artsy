

export interface Publisher {
    publisherId: string;
    publisherName: string;
    displayName: string;
    flags: string;
}

export interface File {
    assetType: string;
    source: string;
}

export interface Version {
    version: string;
    flags: string;
    lastUpdated: Date;
    files: File[];
    assetUri: string;
    fallbackAssetUri: string;
}

export interface Statistic {
    statisticName: string;
    value: number;
}

export interface InstallationTarget {
    target: string;
    targetVersion: string;
}

export interface RootObject {
    publisher: Publisher;
    extensionId: string;
    extensionName: string;
    displayName: string;
    flags: string;
    lastUpdated: Date;
    publishedDate: Date;
    releaseDate: Date;
    shortDescription: string;
    versions: Version[];
    categories: string[];
    tags: string[];
    statistics: Statistic[];
    installationTargets: InstallationTarget[];
    deploymentType: number;
}
