{
  enum Cephalopods {
    OctopusVulgaris = 'OctopusVulgaris',
    Loligo = 'Loligo',
  }

  interface Cephalopoda {
    hasInk: boolean;
    arms: number;
    tentacles: number;
  }

  // The dictionary type, containing species string array which maps to a Cephalopod object
  interface CephalopodDict {
    [species: string]: Cephalopoda;
  }

  const dictionary: CephalopodDict = {};

  // Common octopus
  dictionary[Cephalopods.OctopusVulgaris] = {
    hasInk: true,
    arms: 8,
    tentacles: 0,
  };

  // A kind of squid
  dictionary[Cephalopods.Loligo] = {
    hasInk: true,
    arms: 8,
    tentacles: 2,
  };
}

// Modern ES lets us use the keyword 'namespace' for naming scopes.
namespace OptionsVerbose {
  interface Options {
    material: string;
    backlight: boolean;
  }
  // Read-only version.
  interface ManualReadOnlyOptions {
    readonly material: string;
    readonly backlight: boolean;
  }
  // Optional version.
  interface ManualOptionalOptions {
    material?: string;
    backlight?: boolean;
  }
  // Nullable version.
  interface ManualNullableOptions {
    material: string | null;
    backlight: boolean | null;
  }
}

namespace OptionsTerse {
  // Prefered way for declaring a new type is to create interfaces.
  interface Options {
    material: string;
    backlight: boolean;
  }
  // Read only version.
  type MakeReadOnly<T> = { readonly [Key in keyof T]: T[Key] };
  export type ReadOnlyOptions = MakeReadOnly<Options>;
  // Optional version.
  type MakeOptional<T> = { [Key in keyof T]?: T[Key] };
  export type OptionalOptions = MakeOptional<Options>;
  // Nullable option.
  type MakeNullable<T> = { [Key in keyof T]: T[Key] | null };
  export type NullableOptions = MakeNullable<Options>;
}

import ReadOnlyOptions = OptionsTerse.ReadOnlyOptions;
import OptionalOptions = OptionsTerse.OptionalOptions;
import NullableOptions = OptionsTerse.NullableOptions;

const brick: ReadOnlyOptions = {
  backlight: false,
  material: 'brick',
};

const marble: OptionalOptions = {
  backlight: true,
  material: 'marble',
};

const bark: NullableOptions = {
  backlight: false,
  material: 'bark',
};
