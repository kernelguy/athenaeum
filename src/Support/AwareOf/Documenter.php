<?php

namespace Aedart\Support\AwareOf;

use Aedart\Contracts\Support\Helpers\Config\ConfigAware;
use Aedart\Support\AwareOf\Partials\TwigPartial;
use Illuminate\Contracts\Config\Repository;
use Illuminate\Support\Arr;

class Documenter implements ConfigAware
{
    use TwigPartial;

    /**
     * Template for markdown document
     *
     * @var string
     */
    protected $docsTemplate = 'docs.md.twig';

    /**
     * Generator constructor.
     *
     * @param Repository|null $configuration [optional]
     */
    public function __construct(?Repository $configuration = null)
    {
        $this
            ->setConfig($configuration)
            ->setupTwig();
    }

    /**
     * Generates a single markdown file for the given aware-of
     * components
     *
     * @param array $awareOfComponents [optional]
     *
     * @throws \Twig_Error_Loader
     * @throws \Twig_Error_Runtime
     * @throws \Twig_Error_Syntax
     */
    public function makeDocs(array $awareOfComponents = [])
    {
        $destination = $this->getConfig()->get('docs-output', false);
        if( ! $destination || empty($awareOfComponents)){
            return;
        }

        // Make template data
        $data = [
            'components' => $this->format($awareOfComponents)
        ];

        //dd($data);

        $this->generateFile($this->docsTemplate, $destination, $data);
    }

    /*****************************************************************
     * Internals
     ****************************************************************/

    /**
     * Formats given list of "aware-of" components
     *
     * @param array $awareOfComponents
     *
     * @return array
     */
    protected function format(array $awareOfComponents) : array
    {
        $output = [];
        foreach ($awareOfComponents as $component){

            // Make key (index
            $letter = strtoupper(substr($component['propertyName'], 0, 1));
            $index = $letter . '.' . $component['propertyName'] . '.' . $component['dataType'];

            // Store component acc. to index
            Arr::set($output, $index, [
                'description'   => $component['propertyDescription'],
                'interface'     => $component['interfaceNamespace'] . '\\' . $component['interfaceClassName'],
                'trait'         => $component['traitNamespace'] . '\\' . $component['traitClassName'],
            ]);
        }

        ksort($output);

        return $output;
    }
}